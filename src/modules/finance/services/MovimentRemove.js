class MovimentRemove {
  constructor(FinanceRepository) {
    this.financeRepository = FinanceRepository;
  }

  async execute(data) {
    const { idMoviment, user_id } = data;
    try {
      const moviment = await this.financeRepository.movimentRemove(
        idMoviment,
        user_id,
      );
      console.log(moviment);
      if (!moviment.value)
        return 'this moviment does not exist or does not belong to you';
      return moviment;
    } catch (err) {
      return null;
    }
  }
}
module.exports = MovimentRemove;
