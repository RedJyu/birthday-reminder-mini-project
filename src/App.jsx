import data from './data';
import { useState } from 'react';
import List from './List';

const App = () => {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className='container'>
        <h3>{people.length} Birthdays</h3>
        <List people={people} />
        <button
          className='btn'
          type='button'
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear List
        </button>
      </section>
    </main>
  );
};
export default App;
