import React, { useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import TripCard from '../components/TripCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import NoResults from '../components/NoResults';
import { useTripContext } from '../contexts/TripContext';
import { getTrips } from '../api/trips';
import { debounce } from '../utils/helpers';

const HomePage = () => {
  const { 
    filteredTrips, 
    searchTerm, 
    loading, 
    error, 
    dispatch 
  } = useTripContext();

  useEffect(() => {
    const fetchTrips = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const data = await getTrips();
        dispatch({ type: 'SET_TRIPS', payload: data });
      } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: err.message });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };

    fetchTrips();
  }, [dispatch]);

  const debouncedSearch = React.useMemo(
    () => debounce((term) => {
      dispatch({ type: 'FILTER_TRIPS', payload: term });
    }, 300),
    [dispatch]
  );

  const handleSearchChange = (term) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
    debouncedSearch(term);
  };

  const handleTagClick = (tag) => {
    dispatch({ type: 'FILTER_TRIPS', payload: tag });
  };

  const handleClearSearch = () => {
    dispatch({ type: 'FILTER_TRIPS', payload: '' });
  };

  const handleRetry = () => {
    dispatch({ type: 'SET_ERROR', payload: null });
    const fetchTrips = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });
      try {
        const data = await getTrips();
        dispatch({ type: 'SET_TRIPS', payload: data });
      } catch (err) {
        dispatch({ type: 'SET_ERROR', payload: err.message });
      } finally {
        dispatch({ type: 'SET_LOADING', payload: false });
      }
    };
    fetchTrips();
  };

  return (
    <div className="main-content-wrapper">
      <div className="header">
        <h1>เที่ยวไหนดี</h1>
        <div className="search-bar-container">
          <SearchBar 
            searchTerm={searchTerm} 
            onSearchChange={handleSearchChange}
            onSearchSubmit={(term) => dispatch({ type: 'FILTER_TRIPS', payload: term })}
            placeholder="ค้นหาที่เที่ยว ชื่อสถานที่ หรือหมวดหมู่..."
          />
        </div>
      </div>

      <div className="container">
        {loading && (
          <LoadingSpinner message="กำลังค้นหาสถานที่ท่องเที่ยวที่น่าสนใจ..." />
        )}

        {error && (
          <ErrorMessage 
            error={error} 
            onRetry={handleRetry}
          />
        )}

        {!loading && !error && (
          <>
            {searchTerm && (
              <div className="search-results-info">
                <p>
                  พบ <strong>{filteredTrips.length}</strong> สถานที่ 
                  {searchTerm && ` สำหรับ "${searchTerm}"`}
                </p>
              </div>
            )}

            {filteredTrips.length > 0 ? (
              <div className="trips-container">
                {filteredTrips.map(trip => (
                  <TripCard
                    key={trip.id}
                    trip={trip}
                    onTagClick={handleTagClick}
                    searchTerm={searchTerm}
                  />
                ))}
              </div>
            ) : (
              <NoResults 
                searchTerm={searchTerm}
                onClearSearch={handleClearSearch}
              />
            )}
          </>
        )}
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>© 2024 เที่ยวไหนดี - ค้นหาสถานที่ท่องเที่ยวที่ใช่สำหรับคุณ</p>
          <div className="footer-links">
            <a href="#about">เกี่ยวกับเรา</a>
            <a href="#contact">ติดต่อ</a>
            <a href="#privacy">นโยบายความเป็นส่วนตัว</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;


