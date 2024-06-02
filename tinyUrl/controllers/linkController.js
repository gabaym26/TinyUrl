import Link from'../models/link.js';

const linkController = {
    createLink: async (req, res) => {
        try {
            const { originalUrl,targetParamName } = req.body;
            const newLink = await Link.create({ originalUrl,targetParamName });
            res.status(201).json(newLink);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    getLinkById: async (req, res) => {
        try {
            const link = await Link.findById(req.params.id);
            res.status(200).json(link);
        } catch (err) {
            res.status(404).json({ message: 'Link not found' });
        }
    },
    getLinks: async (req, res) => {
        try {
            const links = await Link.find();
            res.status(200).json(links);
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    updateLink: async (req, res) => {
        try {
            await Link.findByIdAndUpdate(req.params.id, req.body);
            res.status(200).json({ message: 'Link updated successfully' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    },
    deleteLink: async (req, res) => {
        try {
            await Link.findByIdAndDelete(req.params.id);
            res.status(200).json({ message: 'Link deleted successfully' });
        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
};

export default linkController;