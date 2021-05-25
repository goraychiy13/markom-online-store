import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Page, paths } from '../../../core/routes/constants';
import { TypeDispatch } from '../../../redux/reduxStore';
import Pagination from '../../modules/Pagination/Pagination';
import Button from '../../uikit/Button';
import Img from '../../uikit/Img/Img';
import { tagButtons } from './constants';
import {
  ArticleContainer,
  ArticleDate,
  ArticleDescription,
  ArticleTitle,
  BlogArticle,
  BlogArticles,
  BlogButtons,
  BlogHeader,
  BlogWrapper,
  buttonStyles,
  imageStyles,
} from './style';
import { TypeBlogData } from './types';

type Props = {
  blogData: TypeBlogData[];
  articlesList: TypeBlogData[];
  currentPage: number;
  totalCount: number;
  pageSize: number;
  dispatch: TypeDispatch;
};

const Blog: React.FC<Props> = (props) => {
  return (
    <BlogWrapper data-name="blog-wrapper">
      <BlogHeader data-name="blog-header">
        Блог интернет-магазина Маркома
      </BlogHeader>
      <BlogButtons data-name="blog-buttons">
        {tagButtons.map((button) => (
          <Button key={button.id} {...buttonStyles}>
            {button.tagName}
          </Button>
        ))}
      </BlogButtons>
      <BlogArticles data-name="blog-articles">
        {props.articlesList &&
          props.articlesList.map((article) => (
            <BlogArticle key={article.id} data-name="blog-article">
              <Link
                to={paths[Page.BLOG] + '/' + article.id}
                style={{ textDecoration: 'none' }}
              >
                <Img
                  src={article.imageUrl}
                  alt="articleImage"
                  {...imageStyles}
                />
              </Link>
              <ArticleContainer data-name="article-container">
                <ArticleDate data-name="article-date">
                  {article.date}
                </ArticleDate>
                <Link
                  to={paths[Page.BLOG] + '/' + article.id}
                  style={{ textDecoration: 'none' }}
                >
                  <ArticleTitle data-name="article-title">
                    {article.title}
                  </ArticleTitle>
                </Link>
                <ArticleDescription data-name="article-description">
                  {article.description}
                </ArticleDescription>
              </ArticleContainer>
            </BlogArticle>
          ))}
      </BlogArticles>
      <Pagination
        blogData={props.blogData}
        currentPage={props.currentPage}
        totalCount={props.totalCount}
        pageSize={props.pageSize}
        dispatch={props.dispatch}
      />
    </BlogWrapper>
  );
};

export default memo(Blog);
