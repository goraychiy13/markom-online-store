import { memo } from 'react';
import { colors } from '../../../common/colors';
import Pagination from '../../modules/Pagination/Pagination';
import Button from '../../uikit/Button';
import { tagButtons } from './constants';
import {
  BlogButtons,
  BlogCard,
  BlogCards,
  BlogHeader,
  BlogWrapper,
  CardContainer,
  CardDate,
  CardDescription,
  CardTitle,
} from './style';
import { TypeBlogCards } from './types';

type Props = {
  blogCards: TypeBlogCards[];
  paginatedCards: TypeBlogCards[];
  currentPage: number;
  portionSize: number;
  totalCount: number;
  pageSize: number;
  getPaginatedCards: (
    page: number,
    pageSize: number,
    cards: TypeBlogCards[],
  ) => void;
};

const Blogs: React.FC<Props> = (props) => {
  return (
    <BlogWrapper data-name="blog-wrapper">
      <BlogHeader data-name="blog-header">
        Блог интернет-магазина Маркома
      </BlogHeader>
      <BlogButtons data-name="blog-buttons">
        {tagButtons.map((button) => (
          <Button
            key={button.id}
            height="40px"
            padding="0 1.75rem"
            margin="0 0.5rem 0.5rem 0"
            color={colors.darkGrey}
            colorModifier={colors.white}
            backgroundColor={colors.gray98}
            backgroundColorModifier={colors.darkGreen}
          >
            {button.tagName}
          </Button>
        ))}
      </BlogButtons>
      <BlogCards data-name="blog-cards">
        {props.paginatedCards &&
          props.paginatedCards.map((card) => (
            <BlogCard key={card.id} data-name="blog-card">
              <img
                src={card.imageUrl}
                alt="blogImage"
                style={{ width: '100%', cursor: 'pointer' }}
              />
              <CardContainer data-name="card-container">
                <CardDate data-name="card-date">{card.date}</CardDate>
                <CardTitle data-name="card-title">{card.title}</CardTitle>
                <CardDescription data-name="card-description">
                  {card.description}
                </CardDescription>
              </CardContainer>
            </BlogCard>
          ))}
      </BlogCards>
      <Pagination
        blogCards={props.blogCards}
        currentPage={props.currentPage}
        portionSize={props.portionSize}
        totalCount={props.totalCount}
        pageSize={props.pageSize}
        getPaginatedCards={props.getPaginatedCards}
      />
    </BlogWrapper>
  );
};

export default memo(Blogs);
