import Link from '../models/link.js';
const redirectController = {
    getRedirectLink: async (req, res) => {
        const linkId = req.params.linkId;
        try {
            const link = await Link.findById(linkId);

            if (!link) {
                return res.status(404).json({ message: 'Link not found' });
            }
            link.targetValues.find()
            const paramValue = req.query[link.targetParamName] || "";
            // Update click information in the database
            if (paramValue === "") {
                link.clicks.push({ ipAddress: req.body.ip });
            }
            else {
                if (link.targetValues.find(value => value.value === paramValue)) {
                    link.clicks.push({ ipAddress: req.ip, targetParamValue: paramValue });
                }
                else {
                    console.error(error);
                    res.status(404).json({ message: 'The value param is not exist' });
                }
            }
            await link.save();

            // Redirect to the original URL
            res.redirect(301,link.originalUrl);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    },
    getDataSegmentation: async (req, res) => {
        try {
            const { linkId } = req.params;
            const link = await Link.findById(linkId);
            if (!link) {
                return res.status(404).json({ message: 'Link not found' });
            }
            const segmentationData = {};
            link.clicks.forEach(click => {
                const targetValue = link.targetValues.find(value => value.value === click.targetParamValue);
                if (targetValue) { segmentationData[targetValue.name] = (segmentationData[targetValue.name] || 0) + 1; }
            });
            res.status(200).json(segmentationData);

        } catch (err) {
            res.status(400).json({ message: err.message });
        }
    }
}

export default redirectController;