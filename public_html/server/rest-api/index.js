var ID_FUNCIONARIO_INC = 3;

function Funcionario(id, nome, idade) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
}

var funcionarios = [
    new Funcionario(1, 'Jose Silva', 24),
    new Funcionario(2, 'Maria Lima', 26),
    new Funcionario(3, 'Solange Costa', 34)
];

exports.listaFuncionarios = function(req, res) {
    console.log('API: listaFuncionarios');
    res.json(funcionarios);
};

exports.obtemFuncionario = function(req, res) {
    console.log('API: obtemFuncionario');
    var idFuncionario = req.params.id;
    var funcionario;
    for (var i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].id == idFuncionario) {
            funcionario = funcionarios[i];
        }
    }
    res.json(funcionario);
};

exports.salvaFuncionario = function(req, res) {
    console.log('API: salvaFuncionario');
    var funcionario = req.body;
    if (funcionario.id) {
        funcionario = atualiza(funcionario);
    } else {
        funcionario = adiciona(funcionario);

    }
    res.json(funcionario);
};

exports.removeFuncionario = function(req, res) {
    console.log('API: removeFuncionario')
    var idFuncionario = req.params.id;

    for (var i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].id == idFuncionario) {
            funcionarios.splice(i, 1);
            break;
        }
    }
    res.send(204);
};

function adiciona(funcionario) {
    ID_FUNCIONARIO_INC++;
    funcionario.id = ID_FUNCIONARIO_INC;
    funcionarios.push(funcionario);
    return funcionario;
}

function atualiza(funcionario) {
    for (var i = 0; i < funcionarios.length; i++) {
        if (funcionarios[i].id == funcionario.id) {
            funcionarios[i] = funcionario;
            break;
        }
    }
    return funcionarios[i];
}

