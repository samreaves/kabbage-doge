/**
 * Kabbage Doge Client
 * BreedsList Component
 * Written by Sam Reaves
 * October 18, 2017
 * https://github.com/samreaves/kabbage-doge
 */

import React, { Component } from 'react';
import './BreedsList.styl';

class BreedsList extends Component {

  constructor() {
    super();

    this.selectedBreed = '';

    this.breeds = [
      "affenpinscher",
      "african",
      "airedale",
      "akita",
      "appenzeller",
      "basenji",
      "beagle",
      "bluetick",
      "borzoi",
      "bouvier",
      "boxer",
      "brabancon",
      "briard",
      "bulldog",
      "bullterrier",
      "cairn",
      "chihuahua",
      "chow",
      "clumber",
      "collie",
      "coonhound",
      "corgi",
      "dachshund",
      "dane",
      "deerhound",
      "dhole",
      "dingo",
      "doberman",
      "elkhound",
      "entlebucher",
      "eskimo",
      "germanshepherd",
      "greyhound",
      "groenendael",
      "hound",
      "husky",
      "keeshond",
      "kelpie",
      "komondor",
      "kuvasz",
      "labrador",
      "leonberg",
      "lhasa",
      "malamute",
      "malinois",
      "maltese",
      "mastiff",
      "mexicanhairless",
      "mountain",
      "newfoundland",
      "otterhound",
      "papillon",
      "pekinese",
      "pembroke",
      "pinscher",
      "pointer",
      "pomeranian",
      "poodle",
      "pug",
      "pyrenees",
      "redbone",
      "retriever",
      "ridgeback",
      "rottweiler",
      "saluki",
      "samoyed",
      "schipperke",
      "schnauzer",
      "setter",
      "sheepdog",
      "shiba",
      "shihtzu",
      "spaniel",
      "springer",
      "stbernard",
      "terrier",
      "vizsla",
      "weimaraner",
      "whippet",
      "wolfhound"
    ];
  }

  selectBreed(e) {
    e.preventDefault();
    console.log(e);
  }

  renderListOfBreeds() {
    return this.breeds.map((name, index) => {
      return (
        <li key={ index }
            className="breed-selection"
            onClick={this.selectBreed.bind(this)}>{name}</li>
      );
    });
  }

  render() {
    return (
      <div className="breeds-list">
        <ul>
          {this.renderListOfBreeds()}
        </ul>
      </div>
    );
  }
};

export default BreedsList;
