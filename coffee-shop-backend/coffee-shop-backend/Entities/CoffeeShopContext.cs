using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace coffee_shop_backend.Entities;

public partial class CoffeeShopContext : DbContext
{
    public CoffeeShopContext()
    {
    }

    public CoffeeShopContext(DbContextOptions<CoffeeShopContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Creditcard> Creditcards { get; set; }

    public virtual DbSet<Message> Messages { get; set; }

    public virtual DbSet<Product> Products { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseMySQL("server=localhost;port=3306;user=root;password=student;database=coffee_shop");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Creditcard>(entity =>
        {
            entity.HasKey(e => e.CreditCardNumber).HasName("PRIMARY");

            entity.ToTable("creditcard");

            entity.Property(e => e.CreditCardNumber).HasMaxLength(100);
            entity.Property(e => e.AccountState).HasPrecision(10);
            entity.Property(e => e.Cvc2)
                .HasMaxLength(45)
                .HasColumnName("CVC2");
            entity.Property(e => e.NameAndSurname).HasMaxLength(45);
            entity.Property(e => e.ValidUntil).HasMaxLength(45);
        });

        modelBuilder.Entity<Message>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("messages");

            entity.Property(e => e.EmailFrom).HasMaxLength(45);
            entity.Property(e => e.Message1).HasColumnName("Message");
            entity.Property(e => e.NameFrom).HasMaxLength(45);
        });

        modelBuilder.Entity<Product>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("PRIMARY");

            entity.ToTable("products");

            entity.Property(e => e.Description).HasColumnType("text");
            entity.Property(e => e.PricePerKg).HasMaxLength(45);
            entity.Property(e => e.Title).HasMaxLength(45);
            entity.Property(e => e.TotalPrice).HasMaxLength(45);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
