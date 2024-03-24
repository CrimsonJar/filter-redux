// MainApp.js
import { useDispatch, useSelector } from "react-redux";
import { SET_USER_VALUE } from "../redux/actionCreators";
import changeNumber from "../redux/changeNumber";

const MainApp2 = ({ newsId }) => {
  const dispatch = useDispatch();
  const { value: numberValue, userValue } = useSelector(
    (state) => state.number
  );

  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(changeNumber(userValue));
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type='number'
          required
          value={userValue}
          onChange={(e) => {
            dispatch({
              type: SET_USER_VALUE,
              payload: e.target.value,
            });
          }}
        />
      </div>
      <div>
        <button>Change number</button>
      </div>
      {numberValue}
    </form>
  );
};
export default MainApp2;
