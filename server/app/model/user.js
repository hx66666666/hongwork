module.exports = app => {
    const { STRING, INTEGER, DATE } = app.Sequelize;
    const User = app.model.define('user', {
        id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true },
        username: { type: STRING(30), allowNull: true, defaultValue: '', comment: '用户名称', unique: true },
        role: { type: STRING(30), allowNull: true, defaultValue: '' },
        userid: { type: STRING(30), allowNull: true, defaultValue: '' },
        password: {
            type: STRING(200),
            allowNull: true,
            defaultValue: '',
        },
        sex: { type: STRING(30), allowNull: true, defaultValue: '' },
        created_at: DATE,
        updated_at: DATE
    }, {
        timestamps: true, // 是否自动写入时间戳
        tableName: 'user', // 自定义数据表名称
    });


    return User;
}