import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

class PostsNew extends Component {
  renderField(field){
    const { meta: { touched, error} } = field  // from field.meta.touch && field.meta.error
    const className = `form-group ${touched && error ? 'has-danger': ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          { field.meta.touched ? field.meta.error : ''}
        </div>
      </div>
    )
  }

  onSubmit(values){
    console.log(values)
  }

  render(){
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field 
          label="Title"
          name="title"
          component={this.renderField}
        />
        <Field 
          label="Catagories"
          name="catagories"
          component={this.renderField}
        />
        <Field 
          label="Post Content"
          name="content"
          component={this.renderField}
        />
        <button className="btn btn-primary">Submit</button>
        <Link className="btn btn-danger" to="/">
          Back
        </Link>
      </form>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = "Please Enter the title";
  }
  if(!values.catagories){
    errors.catagories = "Please Enter the catagories";
  }
  if(!values.content){
    errors.content = "Please Enter the content";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(PostsNew);