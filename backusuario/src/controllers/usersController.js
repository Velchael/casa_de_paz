const usersLogin = require('../models/usersLogin');

const createUsers = async (request, response) => {
  const createUsers = await usersLogin.createUsers(request.body);
  return response.status(201).json(createUsers);
};

const getUserByUsername = async (request, response) => {
  const { username } = request.params;
  const user = await usersLogin.getUserByUsername(username);

  if (user && user.length > 0) {
    //console.log('Información del usuario obtenida:', user);
    return response.status(200).json({ user }); // 200 OK con la información del usuario
  } else {
    return response.status(404).json({ message: 'User not found' }); // 404 Not Found si el usuario no existe
  }
};

const getUserByEmail = async (request, response) => {
  try {
    const { email } = request.params;
    const user = await usersLogin.getUserByEmail(email);
    if (user.length > 0) {
      response.status(200).json({ error: 'Email exite...' });
    } else {
      // Si el usuario no se encuentra, responder con un mensaje de error.
      response.status(404).json({ error: 'Email not found...' });
    }
  } catch (error) {
    response.status(500).json({ error: 'Internal server error' });
  }
};

const getUserByUsernameAndPassword = async (req, res) => {
  const { username, password } = req.body; // Obteniendo valores desde el cuerpo de la petición
  const user = await usersLogin.getUserByUsernameAndPassword(username, password);
if (user && user.length > 0) {
   
   return res.status(200).json({ user });
 } else {
   return res.status(404).json({ message: 'User not found' });
  }
};
module.exports = {
  createUsers,
  getUserByUsername,
  getUserByEmail,
  getUserByUsernameAndPassword
};