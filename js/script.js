

const app = new Vue(
    {
        el:'#app',
        data: {
            currentChat : 0,
            chatNameSearch: '',
            typeStatus : 'sent',
            newMessage: '',
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        },
        methods: {
           imageChat(indice){
              let fileName;
              fileName= './img/avatar'+this.contacts[indice].avatar+'.jpg'
              return fileName;  
           },
           changeChat(i){
            this.currentChat = i;
           },
           sendNewMessage(textMessage){
            if(!textMessage == '' ){
                this.typeStatus = 'sent'
                this.creationMessage(textMessage,this.typeStatus)
                this.newMessage = '';
                setTimeout(this.automaticMessage,1000);
            }
            else{
                alert('Inserire del testo nel messaggio')
            }
           },
           formatDate(newDate){
            let rawDate = new Date(newDate);
            let formattedDate = rawDate.getHours() + ':' + rawDate.getMinutes();
            return formattedDate;      
           },

           automaticMessage(){
            this.typeStatus = 'received'
            this.creationMessage('OK',this.typeStatus)
           },
           
           creationMessage(messageString,statusString){
            var today = new Date().toLocaleString('en-GB', { timeZone: 'UTC' });
            let objectMessage = {date: today, message: messageString, status:statusString}
            this.contacts[this.currentChat].messages.push(objectMessage)
        },

           /* 
              Creo una funzione che prende la stringa scritta dall'utente e controlla se è presente 
              all'interno dei name dei singoli oggetti,siccome i visbile sono già tutti true, se la stringa non
              c'è settiamo il visible = false. 
              Bisogna fare un ternario in cui se visible è false allora si applica un d-none
              Ci sarà bisogno di un reset per far tornare i visible a true quando non c'è niente nella 
              barra di ricerca.
           */

            // Per il reset basta premere invio con l'input vuoto
              startSearch(stringToSearch){
                for(let i=0; i < this.contacts.length ;i++)
                {
                    if(this.contacts[i].name.toLowerCase().includes(stringToSearch.toLowerCase()))
                    {
                        this.contacts[i].visible = true;
                    }
                    else{
                        this.contacts[i].visible = false
                    }
                }
            }
          
        },
        

    }
    
)

