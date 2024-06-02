import User from '../models/user.js';

const userController = {
    createUser: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const newUser = await User.create({ name, email, password });
            res.status(201).json(newUser);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id).populate('links');
            res.status(200).json(user);
        } catch (err) {
            res.status(404).json({ message: 'User not found' });
        }
    },
    updateUser: async (req, res) => {
        try {
            await User.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: 'User updated successfully' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
};

export default userController;
