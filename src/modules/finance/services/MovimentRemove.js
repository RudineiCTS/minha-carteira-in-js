class MovimentRemove {
  constructor(FinanceRepository) {
    this.financeRepository = FinanceRepository;
  }

  async execute(data) {
    const { id_moviment, user_id } = data;
    const moviment = await this.financeRepository.movimentById(id_moviment);

    if (!moviment) return { error: 'this is moviment does not exist' };

    if (moviment.user_id !== user_id) {
      return { error: 'do you no have permissiom' };
    }
    try {
      await this.financeRepository.movimentRemove(id_moviment, user_id);

      return null;
    } catch (err) {
      return { erro: 'this operation could not be performed' };
    }
  }
}
module.exports = MovimentRemove;
