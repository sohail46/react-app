// import ListGroup from './components/ListGroup';

import Button from './components/Button';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  // const items = ['New York', 'London', 'Mumbai', 'Tokyo'];
  // const handleSelectItem = (item: string) => {
  //   console.log(item);
  // };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <>
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      /> */}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button color="success" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </>
  );
}

export default App;
