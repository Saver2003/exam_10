import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {Button, Image, PageHeader, Panel} from "react-bootstrap";
import {fetchNews} from "../../store/actions/actionNews";
import {Link} from "react-router-dom";

class News extends Component {

  componentDidMount() {
    this.props.onFetchNews();
  }

  render() {
    return (
      <Fragment>
        <PageHeader>
          News
        </PageHeader>
        POSTS
        {this.props.news.map(news => (
          <Panel key={news.id}>
            <Panel.Body>
              {news.image && <Image
                style={{width: '100px', marginRight: '10px'}}
                src={'http://localhost:8000/uploads/' + news.image}
                thumbnail
              />}
              <strong>
                {news.title}
              </strong>
              <strong style={{marginLeft: '10px'}}>
                {news.date}
              </strong>
              <Link to="/news/post">
                <Button bsStyle="primary" className="pull-right">Read full post</Button>
              </Link>
            </Panel.Body>
          </Panel>

        ))}
      </Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    news: state.news.news
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onFetchNews: () => dispatch(fetchNews())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(News);