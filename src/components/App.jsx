import { MyForm } from './MyForm/MyForm';

export const App = () => {
  return (
    <>
      <h1>React homework template</h1>
      <MyForm
        label="My Form"
        formSubmissionHandler={data => {
          console.log('>> App Is Calling!', data);
        }}
      />
    </>
  );
};
