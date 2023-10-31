const mongoose = require("mongoose");
const ConsesionariaSchema= mongoose.Schema({
    nombre:{
        type:String,
        required:true
    },
    direccion:{
        type:String,
        required:true
    },
    lista_de_vehiculos:[
        {
            estado:{
                type:Boolean,
                required:true
            },
            marca:{
                type:String,
                required:true
            },
            modelo:{
                type:String,
                required:true
            },
            cilindraje:{
                type:Number,
                required:true
            },
            color:{
                type:String,
                required:true
            },
            disponible:{
                type:Boolean,
                required:true
            }
        }
    ]
    
});
const Consesionaria = mongoose.model("Consesionaria",ConsesionariaSchema);
module.exports = Consesionaria

/* const userCompany = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    addres:{
        zip_code:{
            type:String
        },
        city:{
            type:String
        },
        municipality:{
            type:String
        },
        country:{
            type:String
        }
    },
    pets:{
        type:Array,
        default:[]
    },
    work:
    {
        id_work:{
            type:String,
        },
        job:{
            type:String
        },
        company:{
            id_company:{
                type:String
            },
            name_company:{
                type:String
            }
        }
    }
}) */
/* {
    "addres": {
      "zip_code": "33232",
      "city": "Cali",
      "municipality": "Valle del cauca",
      "country": "Colombia"
    },
    "work": {
      "company": {
        "id_company": "001",
        "name_company": "Easynet"
      },
      "id_work": "001",
      "job": "Frontend"
    },
    "firstname": "Juan",
    "lastname": "Pepitooo",
    "pets": [
      "Mia",
      "Copito"
    ]
  } */
  const ConcesionarioSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    vehicles:[
        {
            estate:{
                type:String,
                required:true
            },
            brand:{
                type:String,
                required:true
            },
            year:{
                type:String,
                required:true
            },
            cylinder_capacity:{
                type:Number,
                required:true
            },
            color:{
                type:String,
                required:true
            },
            disponible:{
                type:Boolean,
                required:true
            }
        }
    ]
})