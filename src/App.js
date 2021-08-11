import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
//import data from './data';
import items from "./data";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from "./About";
import Home from "./Home";
//import ImageSlider from "./ImageSlider";
import menu from "./data";

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
            <li>
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
          <h3> open 7 days a week</h3>
       
               </div> 
       
        
        <Switch>
        <Route exact component={Home} path="/">
            <Home slides={menu} />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/Menu"> 
          <Categories categories={categories} filterItems={filterItems} />
             <Menu items={menuItems} />
          </Route>
       
        </Switch>
       
        </Router>
      </section>
    </main>
  );
}

export default App;
