import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Card } from "./Components/Card";

const cards = [
  {'name': 'Starter', 'price': 9.95, 'storage': 15, 'users': 20, 'projects': 5, 'support': false, 'image': 'https://st2.depositphotos.com/5777248/10008/v/450/depositphotos_100084804-stock-illustration-green-bicycle-with-leaves-icon.jpg'},
  {'name': 'Unlimited', 'price': 49.95, 'storage': 100, 'users': 'unlimited', 'projects': 50, 'support': true, 'image': 'https://icons.iconarchive.com/icons/papirus-team/papirus-apps/512/preferences-system-login-icon.png'},
  {'name': 'Plus', 'price': 19.95, 'storage': 50, 'users': 40, 'projects': 25, 'support': true, 'image': 'https://static.vecteezy.com/system/resources/previews/009/759/698/non_2x/eps10-green-motorcycle-front-view-icon-isolated-on-white-background-scooter-symbol-in-a-simple-flat-trendy-modern-style-for-your-website-design-logo-pictogram-and-mobile-application-vector.jpg'}

]

function App() {
  return (
    <div className="container mt-3">
      <div className="row gx-3 gy-3">
        {cards.map(item => 
        <Card 
        name={item.name}
        price={item.price}
        storage={item.storage}
        users={item.users}
        projects={item.projects}
        support={item.support}
        image={item.image}
        />
        )}
      </div>
    </div>
  );
}

export default App;
