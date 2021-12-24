import {connect} from "react-redux";
import {InitialState, loadingAC, loadingStopAC} from "./bll/loadingReducer";
import HW10 from "./HW10";

type MapStateToProps = {
  loading: InitialState
}

const mapStateToProps = (state: MapStateToProps) => {
  return {
    isLoading: state.loading.isLoading,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    loading: () => {
      dispatch(loadingAC());
    },
    loadingStop: () => {
      dispatch(loadingStopAC());
    },
  }
}

const PreloaderContainer = connect(mapStateToProps, mapDispatchToProps)(HW10);

export default PreloaderContainer;
