import { take } from 'redux-saga/effects';

function* helloSaga() {
    let inCount = 0;
    while (true) {
        yield take('*');
        inCount += 1;

        console.log('> Hello Saga.', inCount);

        if (inCount === 5) {
            return;
        }
    }
}

export default helloSaga;
