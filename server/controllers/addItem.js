const Airtable = require('airtable');

const { Airtable_API_KEY } = process.env;
const base = new Airtable({ apiKey: Airtable_API_KEY }).base('appAZnpLnWP0wjAc6');

exports.addItem = (req, res) => {
  const { userAirtableId } = req;
  const {
    type, price, color, brandId, size, url,
  } = req.body;

  base('Items').create(
    {
      Name: type,
      Type: type,
      Price: price,
      Colors: color,
      Brand: [brandId],
      Size: size,
      Image: [
        {
          url,
        },
      ],
      Users: [userAirtableId],
    },
    (err) => {
      if (err) {
        return res.json({ success: 'false' });
      }
      return res.json({ success: 'true' });
    },
  );
};