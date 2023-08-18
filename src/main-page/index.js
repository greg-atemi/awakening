import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useEffect, useState, useMemo } from 'react';
import FeaturedHouse from "./featured-house";
import Header from "./header";
import './main-page.css';
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/HouseFromQuery";
import useHouses from "../hooks/useHouses";
import useFeaturedHouse from "../hooks/useFeatuedHouse";
import HouseContext from "../context/housesContext";

function Index() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

    return (
      <Router>
        <HouseContext.Provider value={allHouses}>
          <div className="container">
            <Header subtitle="Boma Yangu!!"/>
            <HouseFilter />
            <Switch>
              <Route path="/searchresults/:country">
                <SearchResults />
              </Route>

              <Route path="/house/:id">
                <HouseFromQuery />
              </Route>

              <Route path="/">
                <FeaturedHouse house={featuredHouse}></FeaturedHouse>
              </Route>
            </Switch>
          </div>
        </HouseContext.Provider>
      </Router>
  );
}

export default Index;
