const Airtable = require('airtable');

const { Airtable_API_KEY } = process.env;
if (!process.env.Airtable_API_KEY) {
  throw new Error('Missing Airtable API KEY env var');
}
const base = new Airtable({ apiKey: Airtable_API_KEY }).base('appAZnpLnWP0wjAc6');

exports.deleteItem = (req, res) => {
  const { id } = req.params;

  base('Items').destroy(id, (err) => {
    if (err) {
      return res.json({ success: 'false' });
    }
    return res.json({ success: 'true' });
  });
};
