import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// import { storage } from "../../shared/firebase";

// action type
const UPLOADING = "UPLOADING"; // 이미지 업로드 중인지 확인하는 액션
const UPLOAD_IMAGE = "UPLOAD_IMAGE"; // 업로드한 이미지의 URL을 저장하는 액션
const SET_PREVIEW = "SET_PREVIEW"; // 미리보기 정보 가져오는 액션
const SET_ALIGN = "SET_ALIGN"; // 이미지 레이아웃 정보 가져오는 액션

// action creators
const uploading = createAction(UPLOADING, (uploading) => ({ uploading }));
const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }));
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }));
const setAlign = createAction(SET_ALIGN, (align) => ({ align }));

// initialState
const initialState = {
  image_url: "",
  uploading: false,
  preview:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAO0AAADVCAMAAACMuod9AAAAXVBMVEXv7+9mZmbs7OxfX1/39/d+fn6np6fX19fz8/POzs55eXlbW1uDg4PS0tJkZGRhYWFqamrn5+eLi4tWVlbh4eGUlJSqqqqhoaH7+/u+vr5vb2/Jycm/v7+Ojo6wsLDYus8vAAADXElEQVR4nO3b6XLiOhCGYWshtG0siWVCljNz/5c5LQhhiWAyFacO8rzPv2Bw1eeW1LIJTQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcYMXKCKfRs4gd4TzfbT7MxzFUkFY6F3v3devYt2MMku/lZ6GbjWCR+uH+02ptR6mJLMY5z/eSbpQRKJq2itqOM99Ie39Ie4u91lUnmPZq1kmmFZHmSuDppZXN0G6ubIgnltbKZuvi2vzYSGlATyytn3frZFIMaVMq7sTSNj+jCSlq3lVT+MS00srcGZNCSsa4eeH4xNI+uxQ1qta3f55+bZ9dfNGwOpLjP5B23ufK5rjrtnC86rTiP7y0iPu0oZtWB7LWv66WFyuvH2La5Q2vpVgVp/Wvyc2Wl28dOuN699L6afVbaVN86WcXoazY/349vi7FyuWFaCpOK63J3SZ254+areb1XrfJxTuhWtP6IUQTc9zZ6cv27W7A7p6V7+prT26IKk0rw9vau1t9S5tEtRvOZ3d/daaVoQ+HtMl11743kW0n9ddW2vAeVjeJujIXM/itc4s8pt9fqTGtNtWYjrUtxc3zVx7WenOwypU91LfCtNp6jpXdi7O8zThZh2VpZRvy3Har/PfbgerSWhlMNJfiru+edZ0HF0Me5+uf9n2pri6tb81lZQ9xT3usf3RBB7ne2afdYN5/vLa0MiQX0se0eWU+dCLJq3EurDbkoIl1MNva0tpcOh3GpcruqtsdMlldjU/fFsLK79eputLqpuLjnD1w3X52Wvu07c/f5xa+vrR+cLEwio/V3Rc3h81z9jjMjVlIPlRTWtGw17O+x9VNRZ7Zx+uSH7m6RS58NWlz67md1bz13e2Hqa25damSmtLqLd4f0+oEXe777KWQd1X1fKPp2+RuzNlDFcNLviShlDeumlUlaeeD3rxfaz5nY1ZbbGEQpD7F+GPRz+8/re/MQxfMrfX4mLYs5EsVQ6ygtr5zn5izn1FDWulKm8Wppn3qPjGIJ5NW5+1ISHtv/r20I0zcVEva3sWv/3uynmJdQdrm18Moto/bzf8d5RPEy5MfQeEL3/sjdpxfP4zzY4zvZhu7zE8Uv2pZ/uYPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg7/0G6cMyGr/MjwcAAAAASUVORK5CYII=",
};

// middleware

// 1. 파이어베이스 storage에 파일로 업로드 하기 (업로드하기 버튼 눌렀을 때, 파일객체로 업로드하는 방법)
// const uploadImageFB = (image) => {
//   return function (dispatch, getState, { history }) {
//     //1. upload 시작 (storage에 넣기)
//     dispatch(uploading(true));
//     // ref하고 put 하기 (파이어베이스 문서 참조)
//     const _upload = storage.ref(`images/${image.name}`).put(image);
//     _upload.then((snapshot) => {
//       // 무엇을 업로드 했는지 보자.
//       console.log(snapshot);
//       // 2. upload 종료
//       //   dispatch(uploading(false)); URL 리덕스에 저장할 때, 즉  dispatch(uploadImage(url)); 이때 리듀서 안에서 바꿔주면 dispatch 한번만 해도 됨
//       // 3. 이미지의 URL을 받아와서 넣어주자.
//       snapshot.ref.getDownloadURL().then((url) => {
//         dispatch(uploadImage(url));
//         console.log(url);
//       });
//     });
//   };
// };

// reducer
export default handleActions(
  {
    [UPLOAD_IMAGE]: (state, action) =>
      produce(state, (draft) => {
        draft.image_url = action.payload.image_url;
        draft.uploading = false; // 미들웨어에서 dispatch 하지 않고 리듀서에서 바로 하기
      }),
    [UPLOADING]: (state, action) =>
      produce(state, (draft) => {
        draft.uploading = action.payload.uploading;
      }),
    [SET_PREVIEW]: (state, action) =>
      produce(state, (draft) => {
        draft.preview = action.payload.preview;
      }),
    [SET_ALIGN]: (state, action) =>
      produce(state, (draft) => {
        draft.align = action.payload.align;
      }),
  },
  initialState
);

const actionCreators = {
  uploadImage,
  //   uploadImageFB,
  setPreview,
  setAlign,
};

export { actionCreators };
