const controller = {};


controller.save = (req, res) => {
    const data = req.body;
    console.log(req.body)
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO addvideo set ?', data, (err, video) => {
            console.log(video)
            conn.query("select description from addvideo order by id desc limit 1", (err2, link) => { 
                console.log(link.value);
                if (err2) {
                    res.json(err2);
                }
                res.render('add', {
                    link: link 
                });
            });
        })
    })
};
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query("SELECT * FROM addvideo WHERE id = ?", [id], (err, rows) => {
            res.render('editar', {
                data: rows[0]
            })
        });
    });
};
controller.update = (req, res) => {
    const { id } = req.params;
    const newVideo = req.body;
    req.getConnection((err, conn) => {

        conn.query('UPDATE addvideo set ?  WHERE id = ?', [newVideo, id], (err, rows) => {
            res.redirect('/');
        });
    });
};

controller.delete = (req, res) => {
        const { id } = req.params;
        req.getConnection((err, connection) => {
            connection.query('DELETE FROM addvideo WHERE id = ?', [id], (err, rows) => {
                res.redirect('/');
            });
        });
    }
    
module.exports = controller;