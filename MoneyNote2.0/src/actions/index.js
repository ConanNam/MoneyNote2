import * as Action from './actionType';

export const fetchPlaceAction = () => {
  console.log('Action_fetchPlaceAction');
  return {
    type: FETCH_PLACE,
  };
};

export const fetchPlaceSuccessAction = receivedPlaces => {
  return {
    type: FETCH_PLACE_SUCCESS,
    receivedPlaces,
  };
};

export const fetchPlaceFailedAction = err => {
  return {
    type: FETCH_PLACE_FAILED,
    err,
  };
};

////////////////////////////////////////////////

export const fetchEarning = () => {
  return {
    type: Action.FETCH_EARNING,
  };
};

///////////////////////////////////////////////

export const fetchSpending = () => {
  return {
    type: Action.FETCH_SPENDING,
  };
};

///////////////////////////////////////////////

export const deleteSpending = () => {
  return {
    type: Action.DELETE_SPENDING,
  };
};

///////////////////////////////////////////////

export const deleteEarning = () => {
  return {
    type: Action.DELETE_EARNING,
  };
};

///////////////////////////////////////////////

export const updateSpending = () => {
  return {
    type: Action.UPDATE_SPENDING,
  };
};

////////////////////////////////////////////////

export const updateEarning = () => {
  return {
    type: Action.UPDATE_EARNING,
  };
};

export const fetchSE = () => {
  return {
    type: Action.FETCH_ALL_SE,
  };
};

export const insertSpending = data => {
  return {
    type: Action.INSERT_SPENDING,
    data: data,
  };
};

export const fetchCustomData = data => {
  console.log('vao action', data);
  return {
    type: Action.FETCH_CUSTOMDATA,
    data: data,
  };
};
