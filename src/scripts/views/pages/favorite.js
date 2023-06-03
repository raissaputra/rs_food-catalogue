import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-restaurant-search-view';
import FavoriteRestaurantShowInitiator from './liked-restaurants/favorite-restaurant-show-initiator';
import FavoriteRestaurantSearchInitiator from './liked-restaurants/favorite-restaurant-search-initiator';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    const hero = document.querySelector('.hero');
    hero.style.display = 'flex';
    return `
      <section class="content">
        <div class="explore">
        <h2 class="content__heading explore__label">Your Favorite Restaurant</h2>
        <input id="query" type="text" class="input-resto" aria-label="search restaurant here" placeholder="Search Restaurant...">
          <div id="restaurants" class="restaurants">
                
          </div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    new FavoriteRestaurantShowInitiator({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchInitiator({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favorite;
