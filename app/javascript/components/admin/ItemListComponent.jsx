import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchItems, deleteItem } from '../../actions/admin/entities_actions';

class PostsListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchItems(this.props.url);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { url } = this.props;
    if (prevProps.url !== url) this.props.fetchItems(url);
  }

  render() {
    return(
      <div className='items-list'>
        <div className='page-description'>
          <h2>{ this.props.title }</h2>
        </div>
        <div className='control-panel'>
          <Link to={ this.props.createNewUrl } className='link-button'>Добавить запись</Link>
        </div>
        { this.renderListOfItems() }
      </div>
    )
  }

  renderListOfItems() {
    const { entities } = this.props;

    if (!entities.length) return(
      <div className='list'>
        <p className='empty-list-message'>
          На данный момент записей нет. Вы можете <Link to='/admin/new-post'>
          создать новую запись</Link>.
        </p>
      </div>
    );

    return(
      <div className='list'>
        <div className='list-header'>
          <div>Название</div>
          <div>Дата создания</div>
          <div>Дата обновления</div>
          <div>Действия</div>
        </div>
        { entities.map((item) => this.renderItemRow(item)) }
      </div>
    )
  }

  renderItemRow(item) {
    return(
      <div key={ item.id } className='list-item'>
        <div>{ item.name }</div>
        <div>{ new Date(item.created_at).toLocaleString() }</div>
        <div>{ new Date(item.updated_at).toLocaleString() }</div>
        <div>
          <Link to={ `${ this.props.editUrl }/${ item.id }` }>
            <i className='fas fa-edit'/>
          </Link>
          <i className='fas fa-trash-alt' onClick={ () => this.deleteItem(item) }/>
        </div>
      </div>
    );
  }

  deleteItem(item) {
    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.deleteItem(this.props.url, csrf, { id: item.id });
  }
}

const mapStateToProps = (state) => {
  return {
    entities: state.entitiesReducer.entities,
  }
};

const mapDispatchToProps = {
  fetchItems, deleteItem
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsListComponent);
