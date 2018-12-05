import bcrypt from 'bcryptjs';

const hash = password => {
    return bcrypt.hashSync(password, 8);
};

const compare = (password, hashedPassword) => {
    return bcrypt.compareSync(password, hashedPassword);
};

module.exports = {
    hash,
    compare
};
