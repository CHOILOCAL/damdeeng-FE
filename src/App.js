import Footer from "./Footer";
import Header from "./Header";

import { Route, Switch } from 'react-router-dom';
import Home from './view/Home'
import About from './view/About'
import Custom from './view/Custom'
import Products from './view/Products'
import MakeTogether from './view/MakeTogether'
import QnA from './view/QnA'


function App() {
  return (
    <div>
      <Header />
      {/* switch를 통한 Router */}

      <Switch>
                <Route path="/" component={Home} exact={true}/>
                <Route path="/about" component={About} />
                <Route path="/custom" component={Custom} />
                <Route path="/products" component={Products} />
                <Route path="/maketogether" component={MakeTogether} />
                <Route path="/qna" component={QnA} />
                
                <Route render={({ location }) => (
          <div>
          <h2>이 페이지는 존재하지 않습니다. </h2><p>{location.pathname}</p></div>
        )}
        />
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;
