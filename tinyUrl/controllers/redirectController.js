import Link from '../models/link.js';
const redirectController = {
    getRedirectLink: async (req, res) => {
        try {
            const { linkId } = req.params;
            const link = await Link.findById(linkId);
            if (!link) {
                res.status(404).json({ message: 'Link not found' });
            }
            else {
                const value = req.query[link.targetParamName];
                if (value && value !== "")
                    if (link.targetValues.find(x => x.value === value))
                        link.clicks.push({ ipAddress: req.connection.remoteAddress, targetParamValue: value });
                    else {
                        res.status(404).json({ message: 'Target is invalid' });
                        return;
                    }
                else
                    link.clicks.push({ ipAddress: req.connection.remoteAddress });
                await link.save();
                res.redirect(301, link.originalUrl);
            }
        } catch (err) {
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