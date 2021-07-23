import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";

const allCategories = ["all",...new Set( items.map((item) => item.category)
//filters the categories without duplication
)]
console.log(allCategories)

function App() {
  const [menuItems, setMenuItems] = useState(items);
  //using the property in our data set to pull as our State Values
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category=== "all") {
      setMenuItems(items);
      return;
    } 
        const newItems = items.filter((item) => item.category === category); //grouping the categories together
    setMenuItems(newItems);
  };

  return (
    <main>
    
      <section className="menu">
      <Router>
      <nav className='navbar'>
          <ul>
            <li >
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
          </ul>
        </nav>
        <div className="title">
          <h2>Miami Cafe 2021</h2>
        </div> 
        <Categories categories={categories} filterItems={filterItems} />
        
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Menu">
             <Menu items={menuItems} />
          </Route>
       
        </Switch>
       
        </Router>
      </section>
    </main>
  );
}

export default App;
