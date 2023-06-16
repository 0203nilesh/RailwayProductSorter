import React from 'react';
import './Text.css';

export default function Text() {
  return (
    <>
    <div class="form__group field">
    <input type="input" class="form__field" placeholder="Name" required=""/>
    <label for="name" class="form__label">Name</label>
    </div>
    </>
  )
}
