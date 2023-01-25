let projectModel = require('../models/project');

// create project
const createProjects = (req, res) => {
    console.log("Project added", req.body)
    var newPro = req.body;
    projectModel.insertProjects( newPro, (err, result)=> {
        if(err) {
            res.json({statusCode: 400, message:err})
        }
        else {
            res.json({statusCode: 200, message:"Added Successfully", data: result})
        }
    })
}

// retrieve project
const retrieveProjects = (req, res) => {
    projectModel.getProjects((err, result) => {
        if(err) {
            res.json({statusCode: 400, message:err})
        }
        else {
            res.json({statusCode: 200, message:"Success", data: result})
        }
    })
}

module.exports = {retrieveProjects , createProjects}