import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  renderField(field){
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        { field.meta.errors }
      </div>
    )
  }

  render(){
    return (
      <form>
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
      </form>
    );
  }
}

function validate(values){
  const errors = {};

  if(!values.title){
    errors.title = "Please Enter the title";
  }
  if(!values.categories){
    errors.categories = "Please Enter the categories";
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