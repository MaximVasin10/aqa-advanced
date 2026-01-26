async function getTodo() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1'
    );

    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in getTodo:', error.message);
    return null;
  }
}

async function getUser() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    if (!response.ok) throw new Error('Network response was not ok');

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error in getUser:', error.message);
    return null;
  }
}

async function runRequests() {
  try {
    // Promise.all
    const [todo, user] = await Promise.all([getTodo(), getUser()]);

    console.log('Promise.all (async) - Todo:', todo);
    console.log('Promise.all (async) - User:', user);

    // Promise.race
    const first = await Promise.race([getTodo(), getUser()]);
    console.log('Promise.race (async) - First ended:', first);
  } catch (error) {
    console.error('General error in runRequests:', error);
  }
}

runRequests();

badcodewritten;
