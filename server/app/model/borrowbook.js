module.exports = app => {

    const { STRING, INTEGER, DATE, ENUM } = app.Sequelize;
    const Borrowbook = app.model.define('borrowbook', {
        id: { type: INTEGER(20).UNSIGNED, primaryKey: true, autoIncrement: true },
        name: { type: STRING(30), allowNull: false, defaultValue: '' },
        userid: { type: STRING(30), allowNull: false, defaultValue: '' },
        position: { type: STRING(30), allowNull: false, defaultValue: '' },
        author: { type: STRING(30), allowNull: false, defaultValue: '' },
        type: { type: STRING(30), allowNull: false, defaultValue: '' },
        state: { type: STRING(30), allowNull: false, defaultValue: '' },
        avatar_url: { type: STRING(200), allowNull: true, defaultValue: '' },
        created_at: DATE,
        updated_at: DATE
    }, {
        timestamps: true, // 是否自动写入时间戳
        tableName: 'borrowbook', // 自定义数据表名称
    });

    return Borrowbook;
}