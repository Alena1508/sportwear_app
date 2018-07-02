import { connect } from 'react-redux';
import { getCategoriesAsync } from '../../store/sagas/categoriesSaga';

export class CategoriesCOntainer extends React.Component {
  render() {
    const categories = (this.props.categories || []).sort((a, b) => (
      (a.title < b.title) ? -1 : (a.title > b.title) ? 1 : 0
    ));
    return (
      <div className="categories-container">
        <ul className="categories-list">
          {
                categories.map(category => (
                  <li>{category.title}</li>
                ))
            }
        </ul>
      </div>
    );
  }
}

const mapStoreToProps = state => ({
  categories: state.categories
});

const mapDispatchToProps = dispatch => ({
  getAllCategories() {
    dispatch(getCategoriesAsync());
  }
});

export const Categories = connect(mapStoreToProps)(CategoriesCOntainer);
