import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import dotenv from 'dotenv';
dotenv.config();

async function DisplayfromSheets(req,res){
    try{
      
        const serviceAccountAuth = new JWT({
          
            email:"fidha-fathima-553@myproject1-402607.iam.gserviceaccount.com",
            key: "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQDPyht3VHFbh8ZR\nhtC3h49qBJfw0DYPdcG4txW/O5ncnVXa+ELR2jG2OEtZSLL2bJO1cvOLwaEozZ5a\nkLhnDH5bvbO3G0NL0Q2A/EGLq6q+YY993ncDBnpyhTYf2FPxR3XKIyaVk51n3LW6\nvUUGIVW6Vtuj0FAsOBgQryF1eoJd0QhirRqxVKeLF5g00crEDlHCxjmnyLRe/+wv\ny/H8noumTYdcIoL3J/iNm+6XRv9u+mS5arHcILOkTiB1mueQFzDUxfi65LQQTrf1\n3NYPg6V1IYI+oQC2ZFTPLI6Z/PAYkMJ+dFTMePGdKVvblw1RRp2Equv6CKTilrrr\nMQ8ql+GlAgMBAAECggEASAdpaf4tpWr1hkFTjKtDPZ8GBIZIlydc1ekxcq74cQ9h\nOZyhnRkj7mSpSfP3hZCxy05jumiOsxRD9mUAZ0hfbPHfoHOk6l03byUCm6YQdBph\noWJCoxvVymj/EB7vSk5ZOI7iyyr2f5B0tpzxlmRr0UJWtPx7LjjrrqzmzlB/bIFv\nnOYACIBSM5M9tJAVDJis118QWPnxSPWEjqHat+UxgRplGO/w1BNV4VWPpWANX9c0\nL3mYEJA9VEUOB9k7MFFDQV/7ada1LU7V40O6oh7v0am2aromVC3RC2zCvpasuF1j\nTI1O2U3oO4CZFetljuv7A1BP2SjiT8Ezkl6+RPDZKQKBgQDoUoVQBcM3x0x/anQQ\nqTNu5Gis7JOoKzJcrgYgkXIVt9SL9JRPinfdjfxxtiNeO8P9eFrg0QQYCbxcedkt\necN1kcjxiOHgBhO1gDgs1c+du603mEWEFNPxauf32PIHD89ZQ79QAXBNQVmYK7sh\nzlp1datB/6KU+k8DH0LTgRyYFwKBgQDk94ENDyIpm5Ibvr1EOkwqG7CxTwaBYrdj\nsWOhfB9lVz/Hx4HUoggXVwdOPUwTVGF4vECo7OiSFlykWoLtNOerot7GOP8H1Iv4\n5xPFQ2vvMnv505VIaKIoA8QOrovO7KaBY87gKctNDmMPlh28BZ7x3VWV0DNnjBvH\nK/sG5/EtowKBgQDJq2iiMH5oGw9iw8wA8n/9UTU0dyEuKGFNZptXBircg3l0DFn6\nOh8XKjvrkcpd8M+PZjytT4OYQktKk1NdUIfFtUmTsdkxmNTfB3C8KtZQ/Cu/SOV/\nZH0e4kh/M8nVK3o46MBX+Qe9aG8X005caD7KG90QK5K8dBTGhwqBg2CI/QKBgQDL\nWBARY/5IC3TQFS6LmGaqAtuCLJevctdBv3mnIc/UNY9cQo/IInqjF9RSJNgaVpcW\nHcIjA/tsOlXeVM/wEEsrQEMusdG0x4vj6nzBdSY3UZOPBNyQaPSSKv4Et/lMNRmO\n0fAZXqTB82QApKYVpLxLOvFWUohEjsbgtOuEb5relwKBgQCaAwfTVyhLlPva/xpE\nM7plAgRffqgiPyMqYYDg+Cc5XRMcaEZYeouWqWNa61bG3a8QxLJtfBjD8RDbIhEW\n1fbMTc+k+1GJ9TDBBariQBdkaq0OLj3l/aWGzrP2A5+xcKYqMkCF7ESmGwNdGmn1\nEnJa3OJ5u1FeCeKWP+K5u0eqpQ==\n-----END PRIVATE KEY-----\n",
            scopes: [
              'https://www.googleapis.com/auth/spreadsheets',
            ],
          });
          
        const doc = new GoogleSpreadsheet('1gYf_hRrO4Lu3oM2YbqMO-TsUS_l3LjiYsVt54idycIg', serviceAccountAuth);
          
        await doc.loadInfo(); // loads document properties and worksheets
          /*console.log(doc.title);
          await doc.updateProperties({ title: 'renamed doc' });
          
          const sheet = doc.sheetsByIndex[0]; // or use `doc.sheetsById[id]` or `doc.sheetsByTitle[title]`
          console.log(sheet.title);
          console.log(sheet.rowCount);*/
        const sheet = doc.sheetsByTitle['Sheet1'];
        const rows = await sheet.getRows();
        console.log('Email', 'Name', 'Phone')
        console.log('------------------------------')
        const data = []
        for(let i=0; i<rows.length; i++){
            const subData = 
            {
                email: rows[i].get('email'),
                name: rows[i].get('name'),
            }
            data.push(subData)
            console.log(rows[i].get('email'), rows[i].get('name'))
        }
        console.log(data)
        res.send(data)

    }
    catch(err){
        console.log(err)
    }
}

export default DisplayfromSheets
