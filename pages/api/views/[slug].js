import db from '../../../config/firebase'

export default async (req, res) => {
    // increment the views
    if (req.method === 'POST') {
      const ref = db.ref('views').child(req.query.slug)
      const { snapshot } = await ref.transaction((currentViews) => {
        if (currentViews === null) {
          return 1
        }
  
        return currentViews + 3
      })
  
      return res.status(200).json({
        total: snapshot.val(),
      })
    }
     if (req.method === 'GET') {
      const snapshot = await db.ref('views').child(req.query.slug).once('value')
      const views = snapshot.val()
  
      return res.status(200).json({ total: views })
    }
  }