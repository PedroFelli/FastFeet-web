import React, { useState } from 'react';
import { useField } from '@rocketseat/unform';

import { Container } from './styles';

export default function AvatarInput() {
  const { preview, setPreview } = useState();

  function handleChange(e) {}

  return (
    <Container>
      <label htmlFor="avatar">
        <img src="" alt="" />

        <input type="file" id="avatar" onChange={handleChange} />
      </label>
    </Container>
  );
}
