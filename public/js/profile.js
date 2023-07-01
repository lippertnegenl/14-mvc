const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#message').value.trim();

  if (name && needed_funding && description) {
    const response = await fetch(`/api/messages`, {
      method: 'POST',
      body: JSON.stringify({ name, blogpost, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create message');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/messages/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete message');
    }
  }
};

document
  .querySelector('.new-message-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.message')
  .addEventListener('click', delButtonHandler);
