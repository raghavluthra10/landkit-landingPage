import './App.css';
import AirbnbCard from './component/AirbnbCard';
import CredSection from './component/CredSection';
import DownloadSample from './component/DownloadSample';
import Footer from './component/Footer';
import HeroSection from './component/HeroSection';
import Navbar from './component/Navbar';
import PlanCard from './component/PlanCard';
import StatsSection from './component/StatsSection';
import StayFocus from './component/StayFocus';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ApiPage from './ApiPage';
import Login from './Login';

function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path='/' exact>
          <Navbar  />
          <HeroSection  />
          <CredSection  />
          <DownloadSample  />
          <StatsSection  />
          <AirbnbCard  />
          <StayFocus  />
          <PlanCard  />
          <Footer  />
        </Route>
        <Route path='/apiPage'>
          <ApiPage  />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;


// https://image.freepik.com/free-vector/illustration-businesspeople-having-video-conference_218660-8.jpg

//logos 
//https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102014/airbnb.png?itok=d2X_Ds1a
//https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/012015/coinbase_logo.png?itok=UOBuPHOG
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgLC6EvfkrvWlAisvzYUiDufVyuWUu4U4wVheo9HKVxMo0aEvqEPwfaHN3RN-YreqY-g&usqp=CAU
//https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102014/netflix_2014.png?itok=qtd05Dk3
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmLFJkQebjKFyxzPShNN1cgRpoAZkQoWo7lOwkBMJYaOQvw4VraVfAHqV6mgWtV22FG88&usqp=CAU
//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaVXGEWSmUdRHdK2O1h7WZWqfARl4s2YJK6g&usqp=CAU

// business meeting
//https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80

// performance stats
//https://image.freepik.com/free-vector/data-analyst-oversees-governs-income-expenses-with-magnifier-financial-management-system-finance-software-it-management-tool-concept_335657-1891.jpg

// airbnb card
//https://images.unsplash.com/photo-1551836022-b06985bceb24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80

// medidate space
// https://image.freepik.com/free-vector/meditation-man-work-business-working-design-concept_1198-943.jpg

