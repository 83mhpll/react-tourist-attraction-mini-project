import React, { createContext, useContext, useReducer } from 'react';

const TripContext = createContext();

const tripReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TRIPS':
      return {
        ...state,
        trips: action.payload,
        filteredTrips: action.payload
      };
    case 'SET_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload
      };
    case 'FILTER_TRIPS':
      const filtered = state.trips.filter(trip => {
        const searchLower = action.payload.toLowerCase();
        return (
          trip.title.toLowerCase().includes(searchLower) ||
          trip.description.toLowerCase().includes(searchLower) ||
          trip.tags.some(tag => tag.toLowerCase().includes(searchLower))
        );
      });
      return {
        ...state,
        filteredTrips: filtered,
        searchTerm: action.payload
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

const initialState = {
  trips: [],
  filteredTrips: [],
  searchTerm: '',
  loading: false,
  error: null
};

export const TripProvider = ({ children }) => {
  const [state, dispatch] = useReducer(tripReducer, initialState);

  const value = {
    ...state,
    dispatch
  };

  return (
    <TripContext.Provider value={value}>
      {children}
    </TripContext.Provider>
  );
};

export const useTripContext = () => {
  const context = useContext(TripContext);
  if (!context) {
    throw new Error('useTripContext must be used within a TripProvider');
  }
  return context;
};