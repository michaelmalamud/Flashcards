import React from "react";
import Header from "../Header";
import NotFound from "../NotFound";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import CreateDeck from "../Create/CreateDeck";
import Deck from "../Create/Deck";
import { useState } from "react";
import Study from "../Study/Study"
import Edit from "../Edit";
import AddCard from "../Create/AddCard"
import EditCard from "../Create/EditCard";

function Layout() {



  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route path="/" exact={true}>
            <Home />
          </Route>
          <Route path="/decks/new" exact= {true}>
            <CreateDeck/>
            </Route>
            <Route path="/decks/:deckId/cards/:cardId/edit">
              <EditCard/>
            </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard/>
          </Route>
          <Route path="/decks/:deckId/study">
            <Study/>
          </Route>
          <Route path="/decks/:deckId/edit">
            <Edit/>
          </Route>
          <Route path="/decks/:deckId">
            <Deck/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
