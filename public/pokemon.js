var pokemon = {
    props:["pokem","dark"],
    data: function(){
        return{
            res:{}
        };
    },
    template:`
    <div>
            <v-card class="d-flex flex-column " :class="'grey '+((!dark)?'lighten-5':'darken-4')" >
                <v-card-title :class="pokem.types[0].couleur">
                    <v-col>
                        <v-chip color="black white--text">{{pokem.id}}</v-chip>
                        {{pokem.nom}}
                    </v-col>
                </v-card-title>
                <v-card-text >
                    <v-row>
                        <v-col  class="col-6">
                        <v-img :src="'images/'+pokem.image"></v-img>
                            <v-container >
                                <v-row>
                                    <v-sheet v-for ="type in pokem.types" class="ma-1 pa-1 d-flex flex-wrap justify-center rounded" :class="type.couleur">
                                        <div>    
                                            {{type.nom}}
                                        </div>
                                    </v-sheet>
                                </v-row>
                            </v-container>
                        </v-col>
                        <v-col class="col-6" >
                            <v-container :class="((!dark)?'white':'black')" :class="((!dark)?'black--text':'white--text')">{{pokem.description}}</v-container>
                            <v-simple-table class="flex justify-space-between" >
                                <template v-slot:default >
                                    <tbody>
                                        <tr >
                                        <td>HP</td>
                                        <td>{{ pokem.base.HP }}</td>
                                        </tr>
                                        <tr >
                                        <td>Attack</td>
                                        <td>{{ pokem.base.Attack }}</td>
                                        </tr >
                                        <tr >
                                        <td>Defense</td>
                                        <td>{{ pokem.base.Defense }}</td>
                                        </tr >
                                        <tr >
                                        <td>SpAttack</td>
                                        <td>{{ pokem.base.SpAttack }}</td>
                                        </tr >
                                        <tr >
                                        <td>SpDefense</td>
                                        <td>{{ pokem.base.SpDefense }}</td>
                                        </tr >
                                        <tr >
                                        <td>Speed</td>
                                        <td>{{ pokem.base.Speed }}</td>
                                        </tr >
                                    </tbody>
                                </template>
                            </v-simple-table>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>       
    </div>
    `
};