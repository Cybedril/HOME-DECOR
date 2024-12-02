import React from 'react';
import Header from './components/Header';
import './components/Header.css';
import ArticleCard from './components/ArticleCard';
import ArticleCardV2 from './components/ArticleCardV2';
import ArticleCardV3 from './components/ArticleCardV3';
import ArticleCardV4 from './components/ArticleCardV4';
import ArticleCardV5 from './components/ArticleCardV5';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';
import RecentPosts from './components/RecentPosts';
import Tags from './components/Tags';
import Footer from './components/Footer';
import './components/ArticleCard.css';
import './components/Pagination.css';
import './components/SearchBar.css';
import './components/RecentPosts';
import './components/Tags';
import './components/Footer';
import './index.css';



function App() {
  return (
    <div className="App">
      <Header />
      <ArticleCard />
      <ArticleCardV2 />
      <ArticleCardV3 />
      <ArticleCardV4 />
      <ArticleCardV5 />
      <Pagination />
      <SearchBar />
      <RecentPosts />
      <Tags />
      <Footer />
      
    </div>
  );
}

export default App;

