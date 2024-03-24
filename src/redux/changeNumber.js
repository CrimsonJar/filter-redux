import { CHANGE_NUMBER } from "./actionCreators";

const changeNumber = (number) => {
  return {
    type: CHANGE_NUMBER,
    payload: number,
  };
};

export default changeNumber;
